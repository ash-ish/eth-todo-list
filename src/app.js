App = {
    load: async () => {
        console.log("app is loading")
    }
}

$(() => {
    $(window).load(() => {
        App.load()
    })
})