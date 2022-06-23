export const mapResponseData = data => data.map(item => ({
  id: item.char_id,
  image: item.img,
  name: item.name,
  occupation: item.occupation,
  status: item.status,
  nickname: item.nickname,
  seasonAppearance: item.appearance,
}))
