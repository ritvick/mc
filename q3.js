/**
 * It is assumed that this code will call an API with an ID. There can be multiple IDs.
 * The goal is to retrie with exponential delay, and add jitter to individual request to prevent searver halt on load
 */

function doThing(id) {

    const backOffDurations = [1000,
        2000,
        4000,
        8000,
        16000,
        32000,
        64000,
        0 // This indicates last retry before declaring it an error
    ];

    for(backOffTime in backOffDurations) {
        try {
            sendRequest(id);
        }catch(e) {
            if(canRetryError(e) && backOffTime) { // this loop will terminate when backOffTime value will become 0
                const sleepTime = applyJitter(backOffTime);
                sleep(sleepTime);
            }else {
                throw("Bubble up the exception to the caller");
            }
        }
    }
}
function applyJitter(time) {
    const jitter = Math.random();
	return time * jitter;
}