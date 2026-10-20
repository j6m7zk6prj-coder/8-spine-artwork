module.exports = {
    name: "Mon Module Pochette Animée",
    author: "Moi",
    version: "1.0",
    
    getArtwork(track) {
        const targetAlbum = "Diamant noir";
        const videoUrl = "https://github.com/j6m7zk6prj-coder/8-spine-artwork/raw/refs/heads/main/P1064659254_Anull_video_gr290_sdr_1080x1440-.mp4";

        if (track.album && track.album.toLowerCase() === targetAlbum.toLowerCase()) {
            return videoUrl;
        }
        
        return null;
    }
};
