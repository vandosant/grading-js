describe("GradeParser", function() {

  it("returns an array of up/down/even for the given array", function() {
    var result = GradeParser.getMovements([6,3,5,4,3,4,4,5]);
    expect(result).toEqual(["down","up","down","down","up","even","up"]);
  });

});
