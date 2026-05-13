---
source_path: "documentation/Accelerate/bnnslayerparameterslossyolo/reduction.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslayerparameterslossyolo/reduction"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:reduction:0000:0001">reduction</span>

<span class="ko-segment" data-segment-id="seg:paragraph:reduction:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:reduction:0002:0001">The function that’s used to reduce the computed loss (must be sum reduction for YOLO).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:reduction:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:reduction:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:reduction:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:reduction:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:reduction:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:reduction:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:reduction:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:reduction:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var reduction: BNNSLossReductionFunction
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnslayerparameterslossyolo/function.md">var function: BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">The function that’s used to compute loss.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnslayerparameterslossyolo/i_desc.md">var i_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">The descriptor of the input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnslayerparameterslossyolo/o_desc.md">var o_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">The descriptor of the output.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnslayerparameterslossyolo/huber_delta.md">var huber_delta: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A value that’s interpreted as width-height loss.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnslayerparameterslossyolo/number_of_grid_columns.md">var number_of_grid_columns: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">The number of columns in the grid.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnslayerparameterslossyolo/number_of_grid_rows.md">var number_of_grid_rows: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">The number of rows in the grid.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnslayerparameterslossyolo/number_of_anchor_boxes.md">var number_of_anchor_boxes: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">The number of anchor boxes in each cell.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnslayerparameterslossyolo/anchor_box_size.md">var anchor_box_size: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/reset(forreadingtimeranges:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnslayerparameterslossyolo/rescore.md">var rescore: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">A Boolean value that determines whether to rescore confidence according to prediction verus ground truth Intersection Over Union (IOU).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnslayerparameterslossyolo/scale_xy.md">var scale_xy: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">The value that specifies the x, y loss-scaling factor.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnnslayerparameterslossyolo/scale_wh.md">var scale_wh: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">A Boolean value that determines whether to rescore confidence according to prediction verus ground truth Intersection Over Union (IOU).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnnslayerparameterslossyolo/scale_object.md">var scale_object: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">The value that specifies the object confidence loss-scaling factor.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="bnnslayerparameterslossyolo/scale_no_object.md">var scale_no_object: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">The value that specifies the no-object confidence scaling factor.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="bnnslayerparameterslossyolo/object_minimum_iou.md">var object_minimum_iou: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">The value that specifies intersection over union (IOU) that’s the minimum the function treats as an object.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="bnnslayerparameterslossyolo/no_object_maximum_iou.md">var no_object_maximum_iou: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">The value that specifies intersection over union (IOU) that’s the maximum the function treats as not an object.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslayerparameterslossyolo/reduction">View on Apple Developer</a>*</span>
