---
source_path: "documentation/AVFoundation/avvideocomposition/determinevalidity-fortimerangevalidationdelegatecompletionhandler.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideocomposition/determinevalidity-fortimerangevalidationdelegatecompletionhandler"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:determinevalidityfortimerangevalidationdelegatecompletionhandler:0000:0001">determineValidity(for:timeRange:validationDelegate:completionHandler:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:determinevalidityfortimerangevalidationdelegatecompletionhandler:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:determinevalidityfortimerangevalidationdelegatecompletionhandler:0002:0001">구성의 지시사항 시간 범위가 유효성 검사 요구 사항을 충족하는지 판단합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:determinevalidityfortimerangevalidationdelegatecompletionhandler:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:determinevalidityfortimerangevalidationdelegatecompletionhandler:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:determinevalidityfortimerangevalidationdelegatecompletionhandler:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:determinevalidityfortimerangevalidationdelegatecompletionhandler:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:determinevalidityfortimerangevalidationdelegatecompletionhandler:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:determinevalidityfortimerangevalidationdelegatecompletionhandler:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:determinevalidityfortimerangevalidationdelegatecompletionhandler:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func isValid(for asset: AVAsset?, timeRange: CMTimeRange, validationDelegate: (any AVVideoCompositionValidationHandling)?) async throws -> Bool
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">유효성 검사 중에 비디오 구성은 대리자가 있는 경우 문제 지점의 참조와 함께 비디오 구성의 유효성 검사 대리자를 호출합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 메서드는 유효성 검사 중에 대리자가 비디오 구성의 지시사항 또는 그 안에 포함된 <a href="avvideocompositioninstruction-swift.class.md">@@TOKEN_0@@</a> 객체의 레이어 지시사항 배열을 수정하면 예외를 발생시킵니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>asset</code>: 지시사항의 시간 범위를 에셋의 재생 기간과 비교하고 레이어 지시사항의 트랙 ID를 에셋의 트랙과 비교해 유효성 검사해야 하는 경우 사용하는 에셋 객체입니다. 이 유효성 검사를 건너뛰려면 <code>nil</code>을 전달합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>timeRange</code>: 지시사항을 유효성 검사할 시간 범위입니다. 메서드는 이 시간 범위와 겹치는 시간 범위를 가진 지시사항만 유효성 검사합니다. 재생 또는 기타 처리에 사용할 수 있는 모든 지시사항을 시간 범위와 무관하게 검증하려면 <code>CMTimeRange(start: .zero, duration: .positiveInfinity)</code>를 전달합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0003"><code>validationDelegate</code>: 처리 중 비디오 구성의 문제 구간에 대한 자세한 정보를 수신하기 위해 <a href="avvideocompositionvalidationhandling.md">@@TOKEN_1@@</a> 프로토콜을 채택하는 객체입니다. 상세 정보가 필요하지 않으면 <code>nil</code>을 전달합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0004"><code>completionHandler</code>: 시스템이 비디오 구성의 유효성을 판별했을 때 호출하는 블록입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001">[func isValid(for: [AVAssetTrack], assetDuration: CMTime, timeRange: CMTimeRange, validationDelegate: (any AVVideoCompositionValidationHandling)?) -&gt; Bool](avvideocomposition/isvalid(for:assetduration:timerange:validationdelegate:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">구성의 지시사항 시간 범위가 유효성 검사 요구 사항을 준수하는지 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avvideocompositionvalidationhandling.md">protocol AVVideoCompositionValidationHandling</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">특정 오류가 발견된 후 비디오 구성의 유효성 검사를 계속 진행할지 여부를 나타내기 위해 구현할 수 있는 메서드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avvideocomposition/isvalid(for:timerange:validationdelegate:">func isValid(for: AVAsset?, timeRange: CMTimeRange, validationDelegate: (any AVVideoCompositionValidationHandling)?) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">구성의 지시사항 시간 범위가 유효성 검사 요구 사항을 준수하는지 나타냅니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideocomposition/determinevalidity(for:timerange:validationdelegate:completionhandler:">View on Apple Developer</a>)*</span>
