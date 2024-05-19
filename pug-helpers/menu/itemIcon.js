exports.default = function itemIcon(item) {
    switch (item.widget?.toLowerCase()) {
        case 'archives':
            return 'icon-archive';
        case 'tags':
            return 'icon-tags';
        case 'links':
            return 'icon-link-45deg';
        default:
            return 'icon-chevron-right';
    }
}
