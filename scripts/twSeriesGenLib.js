
//-- Class SeriesGen -- //

function SeriesGen()
{
	this._Series = [];
}

SeriesGen.prototype.Gen = function()
{
	this.AddPoint("Item 01");
	this.AddPoint("Item 02");
	this.AddPoint("Item 03");
	this.AddPoint("Item 04");
}

SeriesGen.prototype.AddPoint = function(value)
{
	this._Series.push(new SeriesGenPoint(value));
}

SeriesGen.prototype.getSeries = function()
{
	return this._Series;
}

// -- Class SeriesGenPoint -- //

function SeriesGenPoint(value)
{
	this.Value = value;
	return this;
}
