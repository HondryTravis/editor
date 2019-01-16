import DeepFlatten from 'tinymce/themes/inlite/alien/DeepFlatten';
import { UnitTest, assert } from '@ephox/bedrock';
UnitTest.test('atomic.themes.alien.ArrTest', function () {
    var testFlatten = function () {
        assert.eq(DeepFlatten.flatten([1, 2, [3, 4, [5, 6]], [7, 8], 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    };
    testFlatten();
});
//# sourceMappingURL=ArrTest.js.map