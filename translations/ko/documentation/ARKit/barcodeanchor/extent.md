---
source_path: "documentation/ARKit/barcodeanchor/extent.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/barcodeanchor/extent"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:extent:0000:0001">extent</span>

<span class="ko-segment" data-segment-id="seg:paragraph:extent:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:extent:0002:0001">감지된 바코드의 경계 범위입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:extent:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:extent:0004:0001">visionOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var extent: SIMD3<Float> { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">감지된 바코드의 너비는 Y축 회전 전 X축 방향의 길이입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">감지된 바코드의 높이는 Y축 회전 전 Z축 방향의 길이입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="barcodeanchor/originfromanchortransform.md">var originFromAnchorTransform: simd_float4x4</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">바코드 앵커에서 원점 좌표계로의 변환입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="barcodeanchor/payloaddata.md">var payloadData: Data</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">감지된 바코드의 인코딩된 payload 데이터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="barcodeanchor/payloadstring.md">var payloadString: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">감지된 바코드의 디코딩된 payload 문자열 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="barcodeanchor/symbology-swift.property.md">var symbology: BarcodeAnchor.Symbology</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">감지된 바코드의 심볼로지입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="barcodeanchor/symbology-swift.enum.md">BarcodeAnchor.Symbology</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">특정 종류의 바코드를 설명하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="barcodeanchor/id.md">var id: UUID</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">앵커의 고유 식별자입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">*<a href="https://developer.apple.com/documentation/arkit/barcodeanchor/extent">View on Apple Developer</a>*</span>
