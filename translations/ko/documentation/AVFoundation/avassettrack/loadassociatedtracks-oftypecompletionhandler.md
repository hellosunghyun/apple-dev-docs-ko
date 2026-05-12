---
source_path: "documentation/AVFoundation/avassettrack/loadassociatedtracks-oftypecompletionhandler.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassettrack/loadassociatedtracks-oftypecompletionhandler"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:loadassociatedtracksoftypecompletionhandler:0000:0001">loadAssociatedTracks(ofType:completionHandler:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loadassociatedtracksoftypecompletionhandler:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loadassociatedtracksoftypecompletionhandler:0002:0001">지정된 연관 타입을 가진 관련 트랙을 로드합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loadassociatedtracksoftypecompletionhandler:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:loadassociatedtracksoftypecompletionhandler:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadassociatedtracksoftypecompletionhandler:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadassociatedtracksoftypecompletionhandler:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadassociatedtracksoftypecompletionhandler:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadassociatedtracksoftypecompletionhandler:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadassociatedtracksoftypecompletionhandler:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadassociatedtracksoftypecompletionhandler:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func loadAssociatedTracks(ofType trackAssociationType: AVAssetTrack.AssociationType) async throws -> [AVAssetTrack]
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>trackAssociationType</code>: 트랙을 로드할 트랙 연관 타입입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>completionHandler</code>: 시스템이 로딩 요청 완료 후 호출하는 콜백입니다. 완료 처리기는 다음 매개변수를 전달합니다: - **tracks**: 지정된 연관 타입에 대한 연관 트랙 배열입니다. 지정된 연관 타입에 대한 트랙이 없으면 비어 있을 수 있습니다. 오류가 발생하면 값이 <code>nil</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003">**error**: 요청이 실패하면 오류 객체가 반환되며, 그렇지 않으면 <code>nil</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[static var availableTrackAssociationTypes: AVAsyncProperty&lt;Root, [AVAssetTrack.AssociationType]&gt;](avcapturedepthdataoutput/setdelegate(_:callbackqueue:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">트랙이 다른 트랙과 연관될 때 사용하는 연관 타입의 배열입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassettrack/loadassociatedtracks(oftype:completionhandler:">View on Apple Developer</a>)*</span>
