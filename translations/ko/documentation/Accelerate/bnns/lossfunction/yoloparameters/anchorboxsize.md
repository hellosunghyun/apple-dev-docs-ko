---
source_path: "documentation/Accelerate/bnns/lossfunction/yoloparameters/anchorboxsize.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/lossfunction/yoloparameters/anchorboxsize"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:anchorboxsize:0000:0001">anchorBoxSize</span>

<span class="ko-segment" data-segment-id="seg:paragraph:anchorboxsize:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:anchorboxsize:0002:0001">The size of the anchor box.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:anchorboxsize:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:anchorboxsize:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:anchorboxsize:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:anchorboxsize:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:anchorboxsize:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:anchorboxsize:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:anchorboxsize:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:anchorboxsize:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
let anchorBoxSize: Int
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnns/lossfunction/yoloparameters/anchorboxcount.md">let anchorBoxCount: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">The number of anchor boxes in each cell.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnns/lossfunction/yoloparameters/anchorsdata.md">let anchorsData: UnsafeMutablePointer&lt;Float&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">평면 provider의 모든 앵커를 포함하는 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnns/lossfunction/yoloparameters/classificationscale.md">let classificationScale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">provider가 감지한 평면에 대한 업데이트 시퀀스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnns/lossfunction/yoloparameters/gridcolumncount.md">let gridColumnCount: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">The number of columns in the grid.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnns/lossfunction/yoloparameters/gridrowscount.md">let gridRowsCount: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">The number of rows in the grid.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnns/lossfunction/yoloparameters/huberdelta.md">let huberDelta: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">A value that’s interpreted as width-height loss.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnns/lossfunction/yoloparameters/noobjectmaximumiou.md">let noObjectMaximumIoU: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">The value that specifies intersection over union (IOU) that’s the maximum the function treats as not an object.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnns/lossfunction/yoloparameters/noobjectscale.md">let noObjectScale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">The value that specifies the no-object confidence scaling factor.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnns/lossfunction/yoloparameters/objectminimumiou.md">let objectMinimumIoU: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">The value that specifies intersection over union (IOU) that’s the minimum the function treats as an object.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnns/lossfunction/yoloparameters/objectscale.md">let objectScale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">The value that specifies the object confidence loss-scaling factor.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnns/lossfunction/yoloparameters/rescore.md">let rescore: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">A Boolean value that determines whether to rescore confidence according to prediction verus ground truth Intersection Over Union (IOU).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnns/lossfunction/yoloparameters/whscale.md">let whScale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">A Boolean value that determines whether to rescore confidence according to prediction verus ground truth Intersection Over Union (IOU).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="bnns/lossfunction/yoloparameters/xyscale.md">let xyScale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">The value that specifies the x, y loss-scaling factor.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/lossfunction/yoloparameters/anchorboxsize">View on Apple Developer</a>*</span>
