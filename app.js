require(['jquery', 'underscore', 'director', './holder', './data'], function($, _, Router, Holder, data) {
	var tagsTpl = `
		<a href="#" class="tag">All</span>
		<% _.each(tags, function(item, index) { %>
			<a href="#<%= item %>" class="tag"><%= item %></span>
		<% }) %>
	`
	var tags = _.uniq(
		_.flatten(
			_.map(data, function(item, index) {
				return item.tags
			})
		)
	)
	$('#tags').append(
		_.template(tagsTpl)({
			tags: tags
		})
	)

	// 
	var tpl = `
		<div class="card-wrapper">
        <% _.each(data, function(item, index) { %>
            <div class="card" data-tag="<%= item.tags %>">
                <div class="card-title"><h3><a href="<%= item.url %>"><%= item.name || '-' %></h3></a></div>
                <div class="card-content"><img title="<%= item.url || '-' %> Screenshot" src="<%= item.screenshot %>"></div>
                <div class="card-actions">
                	<% _.each(item.actions, function(url, name) { %>
                		<a href="<%= url %>"><%= name %></a>
                	<% }) %>
                </div>
            </div>
        <% }) %>
        </div>
	`
	var result = _.template(tpl)({
		data: data
	})
	$('#main').append(result)

	// 
	function handle(tag) {
		var cards = $('div.card')
		if (!tag) {
			cards.show()
		} else {
			cards.hide()
				.filter('[data-tag="' + tag + '"]').show()
		}
	}

	var router = new Router()
	router.on(/(.*)/, handle)
	router.init()

	// if (location.hash) handle(location.hash)

	Holder.recover().hold()
})