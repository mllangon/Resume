import { Box, VStack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

interface GitHubStats {
  languages: { [key: string]: number }
  totalStars: number
  totalRepos: number
  contributions: number
}

// Reemplaza 'TU_USUARIO_DE_GITHUB' con tu nombre de usuario real de GitHub
const GITHUB_USERNAME = 'TU_USUARIO_DE_GITHUB'

const GitHubStats = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Obtener estadísticas de lenguajes
        const languagesResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
        if (!languagesResponse.ok) {
          throw new Error(`Error al obtener repositorios: ${languagesResponse.statusText}`)
        }
        const repos = await languagesResponse.json()
        
        // Calcular estadísticas
        const languages: { [key: string]: number } = {}
        let totalStars = 0
        let totalRepos = repos.length
        let contributions = 0

        repos.forEach((repo: any) => {
          totalStars += repo.stargazers_count
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1
          }
        })

        // Obtener contribuciones
        const contributionsResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events`)
        if (!contributionsResponse.ok) {
          throw new Error(`Error al obtener eventos: ${contributionsResponse.statusText}`)
        }
        const events = await contributionsResponse.json()
        contributions = events.length

        setStats({
          languages,
          totalStars,
          totalRepos,
          contributions
        })
      } catch (error) {
        console.error('Error fetching GitHub stats:', error)
        setError(error instanceof Error ? error.message : 'Error desconocido al cargar las estadísticas')
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubStats()
  }, [])

  if (loading) {
    return <Text color="white" textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)">Cargando estadísticas...</Text>
  }

  if (error) {
    return (
      <VStack spacing={2} align="start">
        <Text color="white" textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)">
          Error al cargar las estadísticas: {error}
        </Text>
        <Text color="white" textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)">
          Por favor, asegúrate de que el nombre de usuario de GitHub ({GITHUB_USERNAME}) es correcto.
        </Text>
      </VStack>
    )
  }

  if (!stats) {
    return <Text color="white" textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)">No se pudieron cargar las estadísticas</Text>
  }

  return (
    <VStack spacing={4} align="start" w="100%">
      <Box w="100%">
        <Text color="white" textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)" mb={2}>
          Repositorios: {stats.totalRepos}
        </Text>
        <Text color="white" textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)" mb={2}>
          Estrellas totales: {stats.totalStars}
        </Text>
        <Text color="white" textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)" mb={4}>
          Contribuciones: {stats.contributions}
        </Text>
      </Box>
      
      <Box w="100%">
        <Text color="white" textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)" mb={2}>
          Lenguajes más usados:
        </Text>
        {Object.entries(stats.languages)
          .sort(([, a], [, b]) => b - a)
          .map(([language, count]) => (
            <Text key={language} color="white" textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)">
              {language}: {count} repositorios
            </Text>
          ))}
      </Box>
    </VStack>
  )
}

export default GitHubStats 