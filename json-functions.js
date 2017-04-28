
function jsonToOptions(objectJSON)
{
    var _callback = '';
    for(var key in objectJSON)
    {
        _callback += '<option value="' + key + '">' + objectJSON[key] + '</option>';
    }
    return _callback;
}
function jsonToArray(objectJSON)
{
    var _array = [];
    for(var key in objectJSON)
    {
        _array.push({
            id  : key,
            text: objectJSON[key]
        })
    }
    return _array;
}

/**
 * Uso
 * 		info = '<span class="label label-warning">Filtrado</span> {0} de {1}';
 * 		content = formatString(info, [visible2, all2]);
 * @param  {[type]} s    [description]
 * @param  {[type]} args [description]
 * @return {[type]}      [description]
 */
function formatString(s, args) {
	return s.replace(/\{(\d+)\}/g, function(match, number) {
		return typeof args[number] !== 'undefined' ? args[number] : match;
	});
}
