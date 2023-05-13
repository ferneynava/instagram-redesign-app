/* eslint-disable array-callback-return */
import { TOKEN } from './Token.js'
const BASE_API = 'https://graph.instagram.com/me'
const ACCESS_TOKEN = IGQVJXU092bjN4R2VUMFprcWJMN0hMUXpHYzVoYnNfOEVfbG1sSVdabmVldWg5NFZAWbFpnbGxQOE5PLWl3YW1xRVRrOWxQbnRNMkFMcjJJd0U3akpvTzk3WE1JNE5mVXk1MFNvR193

const photoProfile = document.querySelector('.story')
const username = document.querySelector('#username')
const posts = document.querySelector('#posts')
const photos = document.querySelector('#photos')

async function getUserInfo () {
  const response = await fetch(`${BASE_API}?fields=username,media_count&access_token=${ACCESS_TOKEN}`)
  const userInfo = await response.json()
  console.log(userInfo)
  username.innerHTML = userInfo.username
  posts.innerHTML = userInfo.media_count
  return userInfo
}

getUserInfo()

async function getUserMediaInfo () {
  const response = await fetch(`${BASE_API}/media?fields=id,media_url&access_token=${ACCESS_TOKEN}`)
  const userMediaInfo = await response.json()
  return userMediaInfo
}

getUserMediaInfo().then(media => {
  const imgProfile = document.createElement('img')
  imgProfile.classList.add('profile-picture')
  imgProfile.src = media.data[3]?.media_url
  imgProfile.alt = 'FerneyDev'
  photoProfile.appendChild(imgProfile)

  media.data.map((mediaInfo) => {
    const img = document.createElement('img')
    img.style.width = '100px'
    img.src = mediaInfo.media_url
    photos.appendChild(img)
  })
})
