export async function fetchGenerationMix() {
  const response = await fetch("https://api.carbonintensity.org.uk/generation")
  const data = await response.json()

  return data.data
}
