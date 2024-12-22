/*
   * by balzz
   * dont delate my wm
   * follow more instagram: @iqstore78
*/
const axios = require("axios")

module.exports = async (req, res) => {

  const url = 'https://www.uuidgenerator.net/api/version7'
    try {
    const response = await axios.get(url)
    const data = response
    res.status(200).json({
      data
    })
  } catch (error) {
    res.status(500).json({
      error: "Ada masalah, coba lagi nanti"
    })
  }
}