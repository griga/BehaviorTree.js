

describe('BranchNode', function() {
  var selector;
  describe('can be constructed with', function() {
    describe("an object containing it's title", function() {
      beforeEach(function() {
        selector = new BehaviorTree.BranchNode({
          title: 'choose'
        });
      });

      it('and the title is saved on the instance', function() {
        expect(selector.title).toBe('choose');
      });
    });
  });

  describe('instance', function() {
    beforeEach(function() {
      selector = new BehaviorTree.BranchNode({
        title: 'selector'
      });
    });

    it('has the same methods like a Node instance', function() {
      var node = new BehaviorTree.Node({});
      for (var method in node) {
        expect(selector[method]).toBeTruthy();
      }
    });
  });

  describe('the run method', function() {
    var node, hasRun, beSuccess, startCalled, endCalled, canObj, runObj;
    beforeEach(function() {
      hasRun = startCalled = endCalled = false;
      node = new BehaviorTree.Node({
        run: function(arg) {
          runObj = arg;
          hasRun = true;
          if (beSuccess) {
            this.success();
          } else {
            this.fail();
          }
        },
        start: function() { startCalled = true; },
        end: function() { endCalled = true; }
      });
      selector = new BehaviorTree.BranchNode({
        title: 'call it selector',
        nodes: [
          node
        ]
      });
    });

    it("run of task gets the object as argument we passed in", function() {
      var testObj = 23;
      selector.run(testObj);
      expect(runObj).toBe(testObj);
    });

    it('calls first the start method of next node before calling the run method', function() {
      selector.run();
      expect(startCalled).toBeTruthy();
    });

    describe('if success is called by task', function() {
      it("calls the end method of task", function() {
        beSuccess = true;
        selector.run();
        expect(endCalled).toBeTruthy();
      });
    });

    describe('if fail is called by task', function() {
      it("it still calls the end method of task", function() {
        beSuccess = false;
        selector.run();
        expect(endCalled).toBeTruthy();
      });
    });
  });

  describe('the start method', function() {
    var node, runObj, testObj;
    beforeEach(function() {
      testObj = 123;
      node = new BehaviorTree.Node({
        run: function() {
          this.success();
        },
        start: function(arg) {
          runObj = arg;
        }
      });
      selector = new BehaviorTree.BranchNode({
        title: 'test me',
        nodes: [
          node
        ]
      });
      selector.run(testObj);
    });

    it("gets the object as argument we passed in", function() {
      expect(runObj).toBe(testObj);
    });
  });

  describe('the end method', function() {
    var node, runObj, testObj, beSuccess;
    beforeEach(function() {
      testObj = 123;
      node = new BehaviorTree.Node({
        run: function() {
          if (beSuccess) {
            this.success();
          } else {
            this.fail();
          }
        },
        end: function(arg) {
          runObj = arg;
        }
      });
      selector = new BehaviorTree.BranchNode({
        title: 'test me twice',
        nodes: [
          node
        ]
      });
    });

    describe('if success is called by task', function() {
      beforeEach(function() {
        beSuccess = true;
        selector.run(testObj);
      });

      it("gets the object as argument we passed in", function() {
        expect(runObj).toBe(testObj);
      });
    });

    describe('if fail is called by task', function() {
      beforeEach(function() {
        beSuccess = false;
        selector.run(testObj);
      });

      it("gets the object as argument we passed in", function() {
        expect(runObj).toBe(testObj);
      });
    });
  });
});
