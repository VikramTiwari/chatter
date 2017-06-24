'use strict'

exports.chatSlack = function chatSlack (req, res) {
  switch (req.method) {
    case 'GET':
      switch (req.query.action) {
        case 'getTeam':
          getTeam(req, res)
          break
        case 'getChannel':
          getChannel(req, res)
          break
        case 'getChannels':
          getChannels(req, res)
          break
        case 'getStatus':
          getStatus(req, res)
          break
        case 'getConversationHistory':
          getConversationHistory(req, res)
          break
        case 'getBot':
          getBot(req, res)
          break
        case 'leaveBot':
          leaveBot(req, res)
          break
        default:
          unknown(req, res)
      }
      break
    case 'POST':
      switch (req.query.action) {
        case 'createChannel':
          createChannel(req, res)
          break
        case 'createMessage':
          createMessage(req, res)
          break
        case 'createImageUpload':
          createImageUpload(req, res)
          break
        case 'createFileUpload':
          createFileUpload(req, res)
          break
        default:
          unknown(req, res)
      }
      break
    default:
      unknown(req, res)
      break
  }
}

function getTeam (req, res) {
  res.status(200).send()
}

function getChannel (req, res) {
  res.status(200).send()
}

function getChannels (req, res) {
  res.status(200).send()
}

function getStatus (req, res) {
  res.status(200).send()
}

function getConversationHistory (req, res) {
  res.status(200).send()
}

function getBot (req, res) {
  res.status(200).send()
}

function leaveBot (req, res) {
  res.status(200).send()
}

function createChannel (req, res) {
  res.status(200).send()
}

function createMessage (req, res) {
  res.status(200).send()
}

function createImageUpload (req, res) {
  res.status(200).send()
}

function createFileUpload (req, res) {
  res.status(200).send()
}

function unknown (req, res) {
  res.status(500).send({
    error: 'Something broke!'
  })
}
