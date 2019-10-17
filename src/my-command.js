import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {
  const doc = sketch.getSelectedDocument()
  const selectedLayers = doc.selectedLayers
  const selectedCount = selectedLayers.length

  sketch.UI.getInputFromUser(
    "What's your magic number?",
    {
      initialValue: '60px',
    },
    (err, value) => {
      if (err) {
        // most likely the user canceled the input
        return
      } if (value === '60px'){
        sketch.UI.message("Wow your Magicnumber is" + value + "🙌")
      }
    }
  )
  
}
