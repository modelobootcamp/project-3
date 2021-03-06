d3.json("all_apps", function(error, data) {
    if (error) throw error;

var  SizeChart = dc.rowChart("#Size"),
                   Android_VerChart = dc.rowChart("#Android_Ver"),
                   CategoryChart = dc.rowChart("#Category"),
                   TypeChart = dc.rowChart("#Type"),
                   Content_RatingChart = dc.rowChart("#Content_Rating"),
                   GenresChart = dc.rowChart("#Genres"),
               //     visCount = dc.dataCount(".dc-data-count")

                   ndx = crossfilter(data);

                   var SizeDim = ndx.dimension(function (d) { return d["Size"]; }); 
                   var Android_VerDim = ndx.dimension(function (d) { return d["Android Ver"]; }); 
                   var CategoryDim = ndx.dimension(function (d) { return d["Category"]; });           
                   var TypeDim = ndx.dimension(function (d) { return d["Type"]; });
                   var Content_RatingDim = ndx.dimension(function (d) { return d["Content Rating"]; });
                   var GenresDim = ndx.dimension(function (d) { return d["Genres"]; });

                   var SizeGroup = SizeDim.group();
                   var Android_VerGroup = Android_VerDim.group();
                   var CategoryGroup = CategoryDim.group();
                   var TypeGroup = TypeDim.group();
                   var Content_RatingGroup = Content_RatingDim.group();
                   var GenresGroup = GenresDim.group();


                   SizeChart
                        .dimension(SizeDim)
                        .group(SizeGroup)
                        .elasticX(false)
                        .width(500)
                        .height(500);

                   Android_VerChart
                        .dimension(Android_VerDim)
                        .group(Android_VerGroup)
                        .elasticX(false)
                        .width(500)
                        .height(500);

                   CategoryChart
                        .dimension(CategoryDim)
                        .group(CategoryGroup)
                        .elasticX(false)
                        .width(500)
                        .height(500);

                   TypeChart
                        .dimension(TypeDim)
                        .group(TypeGroup)
                        .elasticX(false)
                        .width(500)
                        .height(500);

                   Content_RatingChart
                        .dimension(Content_RatingDim)
                        .group(Content_RatingGroup)
                        .elasticX(false)
                        .width(500)
                        .height(500)

                   GenresChart
                        .dimension(GenresDim)
                        .group(GenresGroup)
                        .elasticX(false)
                        .width(200)
                        .height(200)
                        .data(function (group) { return group.top(10); });




                   dc.renderAll();

              });
