class Utility {
    static generateUUID()
    {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    static randomChartColor()
    {
        var colors = [
            'rgb(255, 99, 132)',    // red
            'rgb(245, 130, 155)',   // pink
            'rgb(255, 159, 64)',    // orange
            'rgb(255, 127, 80)',    // coral
            'rgb(255, 205, 86)',    // yellow
            'rgb(70, 227, 149)',    // green
            'rgb(112, 235, 96)',    // lime
            'rgb(54, 162, 235)',    // blue
            'rgb(153, 102, 255)',   // purple
            'rgb(218, 98, 240)'     // magenta
        ]

        return colors[Math.floor(Math.random() * colors.length)];
    }
}

export default Utility;