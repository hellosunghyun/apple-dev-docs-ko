---
source_path: "documentation/Accelerate/bnns/lossfunction/yoloparameters/gridrowscount.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/lossfunction/yoloparameters/gridrowscount"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:gridrowscount:0000:0001">gridRowsCount</span>

<span class="ko-segment" data-segment-id="seg:paragraph:gridrowscount:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:gridrowscount:0002:0001">그리드의 행 수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:gridrowscount:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:gridrowscount:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:gridrowscount:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:gridrowscount:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:gridrowscount:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:gridrowscount:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:gridrowscount:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:gridrowscount:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
let gridRowsCount: Int
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnns/lossfunction/yoloparameters/anchorboxcount.md">let anchorBoxCount: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">각 셀의 anchor boxes 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnns/lossfunction/yoloparameters/anchorboxsize.md">let anchorBoxSize: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">anchor box의 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnns/lossfunction/yoloparameters/anchorsdata.md">let anchorsData: UnsafeMutablePointer&lt;Float&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsfilterapplybackwardbatch(_:_:_:_:_:_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnns/lossfunction/yoloparameters/classificationscale.md">let classificationScale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">분류 스케일링 계수를 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnns/lossfunction/yoloparameters/gridcolumncount.md">let gridColumnCount: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">그리드의 열 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnns/lossfunction/yoloparameters/huberdelta.md">let huberDelta: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">너비-높이 손실로 해석되는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnns/lossfunction/yoloparameters/noobjectmaximumiou.md">let noObjectMaximumIoU: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">함수가 객체가 아닌 것으로 간주하는 최대 IOU를 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnns/lossfunction/yoloparameters/noobjectscale.md">let noObjectScale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">비객체 신뢰도 스케일링 계수를 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnns/lossfunction/yoloparameters/objectminimumiou.md">let objectMinimumIoU: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">함수가 객체로 간주하는 최소 IOU를 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnns/lossfunction/yoloparameters/objectscale.md">let objectScale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">객체 신뢰도 손실 스케일링 계수를 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnns/lossfunction/yoloparameters/rescore.md">let rescore: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">예측과 정답 Intersection over Union(IOU)을 기준으로 신뢰도를 재점수화할지 여부를 결정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnns/lossfunction/yoloparameters/whscale.md">let whScale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">예측과 정답 Intersection over Union(IOU)을 기준으로 신뢰도를 재점수화할지 여부를 결정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="bnns/lossfunction/yoloparameters/xyscale.md">let xyScale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">x 및 y 손실 스케일링 계수를 지정하는 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/lossfunction/yoloparameters/gridrowscount">View on Apple Developer</a>*</span>
