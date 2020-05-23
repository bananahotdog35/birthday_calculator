console.log("hello world")

const writeValues = () => { 
    console.log("inside the writeValues function")
    console.log("hello world")
    let dob = $('#dob').val()
    console.log("i am here", dob )

    now = moment()
    then = moment(dob)
    duration = moment.duration(now.diff(then))

    $('#years-value').text(duration.as('years').toFixed(1))
    $('#months-value').text(duration.as('months').toFixed(1))
    $('#weeks-value').text(duration.as('weeks').toFixed(1))
    $('#days-value').text(duration.as('days').toFixed(1))
}

$('#dob-button').on('click', writeValues)
 