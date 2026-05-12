---
source_path: "documentation/Accelerate/bnnslayerparameterslossyolo/anchor-box-size.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslayerparameterslossyolo/anchor-box-size"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:anchorboxsize:0000:0001">anchor_box_size</span>

<span class="ko-segment" data-segment-id="seg:paragraph:anchorboxsize:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:anchorboxsize:0002:0001">앵커 박스의 크기입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:anchorboxsize:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:anchorboxsize:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:anchorboxsize:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:anchorboxsize:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:anchorboxsize:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:anchorboxsize:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:anchorboxsize:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:anchorboxsize:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var anchor_box_size: Int
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnslayerparameterslossyolo/function.md">var function: BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">손실 계산에 사용되는 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnslayerparameterslossyolo/i_desc.md">var i_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">입력의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnslayerparameterslossyolo/o_desc.md">var o_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">출력의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnslayerparameterslossyolo/reduction.md">var reduction: BNNSLossReductionFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">계산된 손실을 축소하는 데 사용되는 함수입니다(YOLO의 경우 sum reduction이어야 합니다).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnslayerparameterslossyolo/huber_delta.md">var huber_delta: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">너비-높이 손실로 해석되는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnslayerparameterslossyolo/number_of_grid_columns.md">var number_of_grid_columns: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">그리드의 열 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnslayerparameterslossyolo/number_of_grid_rows.md">var number_of_grid_rows: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">그리드의 행 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnslayerparameterslossyolo/number_of_anchor_boxes.md">var number_of_anchor_boxes: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">각 셀의 앵커 박스 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnslayerparameterslossyolo/rescore.md">var rescore: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">예측값과 정답(ground truth)의 Intersection Over Union(IOU)을 기준으로 신뢰도를 다시 점수화할지 결정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnslayerparameterslossyolo/scale_xy.md">var scale_xy: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">x, y 손실 스케일링 계수를 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnnslayerparameterslossyolo/scale_wh.md">var scale_wh: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">예측값과 정답(ground truth)의 Intersection Over Union(IOU)을 기준으로 신뢰도를 다시 점수화할지 결정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnnslayerparameterslossyolo/scale_object.md">var scale_object: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">객체 신뢰도 손실 스케일링 계수를 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="bnnslayerparameterslossyolo/scale_no_object.md">var scale_no_object: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">비객체 신뢰도 스케일링 계수를 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="bnnslayerparameterslossyolo/object_minimum_iou.md">var object_minimum_iou: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">함수가 객체로 간주하는 최소 Intersection Over Union(IOU) 값을 지정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="bnnslayerparameterslossyolo/no_object_maximum_iou.md">var no_object_maximum_iou: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">함수가 객체가 아닌 것으로 간주하는 최대 Intersection Over Union(IOU) 값을 지정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslayerparameterslossyolo/anchor_box_size">View on Apple Developer</a>*</span>
