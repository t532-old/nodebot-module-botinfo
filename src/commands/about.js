export default {
    args: '',
    options: [],
    /**
     * Send bot's info.
     * @param {ContentMessage} msg The universal msg object
     */
    async action(msg) {
        msg.send(
`Nodebot v${msg.static().config.botinfo.version}
powered by Node.js & cqhttp.
${new Date().getFullYear()} trustgit | under MIT License
Star on GitLab if you enjoy it! https://gitlab.com/trustgit/nodebot`
        )
    }
}