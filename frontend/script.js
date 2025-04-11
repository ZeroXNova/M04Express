//eventlistener,triggers when DOM is loaded
addEventListener("DOMContentLoaded", async function(){
    const response = await this.fetch("http://localhost:300/api/songs");
});