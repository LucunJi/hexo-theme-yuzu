
exports.default = function itemURL(item) {
    const config = this.config, url_for = this.url_for;
    switch (item.widget?.toLowerCase()) {
        case 'archives':
            return url_for('/' + config.archive_dir);
        case 'tags':
            return url_for('/' + config.tag_dir);
        default:
            return url_for(`/${config.category_dir}/${item.name}/`);
    }
}
