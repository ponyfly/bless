import qiniu from '@/utils/qiniu'
import API from '@/api/index'

function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function fileUpload(filePath, data, succ, err) {
  //支服务器拿token,成功后开始七牛上传
  wx.showLoading({
    title: '上传中',
    mask: true,
  })

  let isTimeout = false
  let uploadTimeout = setTimeout(function() {
    isTimeout = true
    wx.hideLoading()
    wx.showToast({
      title: '上传超时',
      mask: true,
    })
  }, 30000)

  wx.request({
    url: API.getUploadInfo,
    method: 'POST',
    data: data,
    success: function(jsonToken) {
      qiniu.upload(filePath, function(qiniuRes) {
        clearTimeout(uploadTimeout)
        if (isTimeout) {
          console.log('虽然上传成功了，但是超时了，不做后续操作')
          return
        }
        wx.hideLoading()
        succ({
          resUrl: jsonToken.data.uploadInfoList[0].finalUrl,
          status: qiniuRes
        })
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      }, function(error) {
        err(error)
      }, {
        region: 'ECN',
        key: jsonToken.data.uploadInfoList[0].key,
        uptoken: jsonToken.data.uploadInfoList[0].token,
      })
    },
    fail() {
      err()
      console.log('获取token信息失败')
    }
  })
}
