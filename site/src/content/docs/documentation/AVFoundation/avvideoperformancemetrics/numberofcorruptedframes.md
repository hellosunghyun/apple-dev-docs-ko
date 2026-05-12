---
source_path: "documentation/AVFoundation/avvideoperformancemetrics/numberofcorruptedframes.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideoperformancemetrics/numberofcorruptedframes"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:numberofcorruptedframes:0000:0001">numberOfCorruptedFrames</span>

<span class="ko-segment" data-segment-id="seg:paragraph:numberofcorruptedframes:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:numberofcorruptedframes:0002:0001">손상된 프레임의 총 개수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:numberofcorruptedframes:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:numberofcorruptedframes:0004:0001">iOS 17.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:numberofcorruptedframes:0004:0002">iPadOS 17.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:numberofcorruptedframes:0004:0003">Mac Catalyst 17.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:numberofcorruptedframes:0004:0004">macOS 14.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:numberofcorruptedframes:0004:0005">tvOS 17.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:numberofcorruptedframes:0004:0006">visionOS 1.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var numberOfCorruptedFrames: Int { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avvideoperformancemetrics/numberofdroppedframes.md">var numberOfDroppedFrames: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">시스템이 디코딩 전에 삭제했거나 표시 마감 기한을 놓쳐 삭제된 프레임의 총 개수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avvideoperformancemetrics/numberofframesdisplayedusingoptimizedcompositing.md">var numberOfFramesDisplayedUsingOptimizedCompositing: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">다른 UI 요소와 합성하지 않고, 전력 효율성이 높은 특수 모드에서 렌더링된 전체 화면 프레임의 총 개수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avvideoperformancemetrics/totalaccumulatedframedelay.md">var totalAccumulatedFrameDelay: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">표시된 비디오 프레임의 지정된 표시 시간과 실제 표시 시간 사이에 누적된 시간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avvideoperformancemetrics/totalnumberofframes.md">var totalNumberOfFrames: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">프레임이 하나도 삭제되지 않을 경우 표시되는 총 프레임 수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideoperformancemetrics/numberofcorruptedframes">View on Apple Developer</a>*</span>
