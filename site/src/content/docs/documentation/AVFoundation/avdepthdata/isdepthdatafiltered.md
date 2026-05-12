---
source_path: "documentation/AVFoundation/avdepthdata/isdepthdatafiltered.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avdepthdata/isdepthdatafiltered"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isdepthdatafiltered:0000:0001">isDepthDataFiltered</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isdepthdatafiltered:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isdepthdatafiltered:0002:0001">깊이 맵에 시간적으로 평활화된 데이터가 포함되는지 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isdepthdatafiltered:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isdepthdatafiltered:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isdepthdatafiltered:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isdepthdatafiltered:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isdepthdatafiltered:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:isdepthdatafiltered:0004:0005">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isdepthdatafiltered:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isDepthDataFiltered: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">캡처 시스템은 캡처된 깊이 데이터의 이전 및 후속 프레임을 시간적으로 보간하여 저조도 또는 렌즈 가림으로 인해 발생한 노이즈를 완화하고 누락된 값을 채울 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">스트리밍 깊이 캡처의 필터링은 <a href="avcapturedepthdataoutput.md">@@TOKEN_0@@</a> <a href="avcapturedepthdataoutput/isfilteringenabled.md">@@TOKEN_1@@</a> 속성으로 제어하며, 사진 캡처와 함께 캡처되는 깊이 데이터의 필터링은 <a href="avcapturephotosettings.md">@@TOKEN_2@@</a> <a href="avdepthdata/isdepthdatafiltered.md">@@TOKEN_3@@</a> 속성으로 제어할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">깊이 데이터 필터링은 보조 이미지에 시각 효과를 적용하는 데 더 유용하지만, 데이터가 변경되어 컴퓨터 비전 작업에는 더 이상 적합하지 않을 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">(필터링되지 않은 깊이 맵에서는 누락된 값이 <code>NaN</code>으로 표시됩니다.)</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avdepthdata/depthdataaccuracy.md">var depthDataAccuracy: AVDepthData.Accuracy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">깊이 데이터 맵 값의 일반 정확도입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avdepthdata/accuracy.md">AVDepthData.Accuracy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">깊이 데이터 맵의 일반 정확도를 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avdepthdata/depthdataquality.md">var depthDataQuality: AVDepthData.Quality</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">깊이 맵의 전체 품질입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avdepthdata/quality.md">AVDepthData.Quality</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">깊이 데이터 맵의 전체 품질을 나타내는 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avdepthdata/isdepthdatafiltered">View on Apple Developer</a>*</span>
