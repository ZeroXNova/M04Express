//eventlistener,triggers when DOM is loaded
addEventListener("DOMContentLoaded", async function(){
    const response = await this.fetch("localhost:300/api/songs");
});