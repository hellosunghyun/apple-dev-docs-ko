---
source_path: "documentation/AVFoundation/avcomposition/loadtracks-withmediacharacteristiccompletionhandler.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcomposition/loadtracks-withmediacharacteristiccompletionhandler"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:loadtrackswithmediacharacteristiccompletionhandler:0000:0001">loadTracks(withMediaCharacteristic:completionHandler:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loadtrackswithmediacharacteristiccompletionhandler:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loadtrackswithmediacharacteristiccompletionhandler:0002:0001">지정된 특성의 미디어를 포함하는 트랙을 로드합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loadtrackswithmediacharacteristiccompletionhandler:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:loadtrackswithmediacharacteristiccompletionhandler:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadtrackswithmediacharacteristiccompletionhandler:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadtrackswithmediacharacteristiccompletionhandler:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadtrackswithmediacharacteristiccompletionhandler:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadtrackswithmediacharacteristiccompletionhandler:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadtrackswithmediacharacteristiccompletionhandler:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadtrackswithmediacharacteristiccompletionhandler:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func loadTracks(withMediaCharacteristic mediaCharacteristic: AVMediaCharacteristic) async throws -> [AVCompositionTrack]
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>mediaCharacteristic</code>: 로드할 트랙의 미디어 특성입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>completionHandler</code>: 시스템이 로드 요청을 마친 뒤 호출하는 콜백입니다. 이 콜백에는 다음 매개변수가 전달됩니다: - **tracks**: 지정한 미디어 특성을 가진 트랙이 없는 경우 비어 있을 수 있는 트랙 배열. 오류가 발생하면 값은 <code>nil</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003">**error**: 요청이 실패하면 에러 객체이며, 실패하지 않으면 <code>nil</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[static var tracks: AVAsyncProperty&lt;Root, [AVCompositionTrack]&gt;](avpartialasyncproperty/tracks-9eows.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">컴포지션이 포함하는 트랙입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcomposition/loadtrack(withtrackid:completionhandler:">func loadTrack(withTrackID: CMPersistentTrackID, completionHandler: (AVCompositionTrack?, (any Error)?) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정된 식별자를 포함하는 트랙을 로드합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[func loadTracks(withMediaType: AVMediaType, completionHandler: ([AVCompositionTrack]?, (any Error)?) -&gt; Void)](avcomposition/loadtracks(withmediatype:completionhandler:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정된 유형의 미디어를 포함하는 트랙을 로드합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcomposition/loadtracks(withmediacharacteristic:completionhandler:">Apple Developer에서 보기</a>)*</span>
