---
source_path: "documentation/AVFoundation/avpartialasyncproperty/naturaltimescale.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/naturaltimescale"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:naturaltimescale:0000:0001">naturalTimeScale</span>

<span class="ko-segment" data-segment-id="seg:paragraph:naturaltimescale:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:naturaltimescale:0002:0001">트랙이 참조하는 미디어의 기본 타임스케일입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:naturaltimescale:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:naturaltimescale:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:naturaltimescale:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:naturaltimescale:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:naturaltimescale:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:naturaltimescale:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:naturaltimescale:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:naturaltimescale:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static var naturalTimeScale: AVAsyncProperty<Root, CMTimeScale> { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">속성 값을 가져오려면 <a href="avasynchronouskeyvalueloading/load(_:isolation:">@@TOKEN_0@@</a>.md) 메서드를 사용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avpartialasyncproperty/timerange.md">static var timeRange: AVAsyncProperty&lt;Root, CMTimeRange&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">에셋의 전체 타임라인 내에서 트랙의 시간 범위를 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avpartialasyncproperty/estimateddatarate.md">static var estimatedDataRate: AVAsyncProperty&lt;Root, Float&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">트랙이 참조하는 미디어의 초당 비트 수 기준 추정 데이터 전송률입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/naturaltimescale">View on Apple Developer</a>*</span>
