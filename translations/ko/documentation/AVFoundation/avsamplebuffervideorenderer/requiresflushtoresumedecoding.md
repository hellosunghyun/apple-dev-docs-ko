---
source_path: "documentation/AVFoundation/avsamplebuffervideorenderer/requiresflushtoresumedecoding.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/requiresflushtoresumedecoding"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:requiresflushtoresumedecoding:0000:0001">requiresFlushToResumeDecoding</span>

<span class="ko-segment" data-segment-id="seg:paragraph:requiresflushtoresumedecoding:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:requiresflushtoresumedecoding:0002:0001">프레임 디코딩을 계속하려면 렌더러가 플러시를 필요로 하는지 나타내는 Boolean 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:requiresflushtoresumedecoding:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:requiresflushtoresumedecoding:0004:0001">iOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:requiresflushtoresumedecoding:0004:0002">iPadOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:requiresflushtoresumedecoding:0004:0003">Mac Catalyst 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:requiresflushtoresumedecoding:0004:0004">macOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:requiresflushtoresumedecoding:0004:0005">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:requiresflushtoresumedecoding:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var requiresFlushToResumeDecoding: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">앱이 비디오 디코더 리소스를 사용할 수 없는 상태가 되면 비디오 렌더러의 상태가 <a href="avqueuedsamplebufferrenderingstatus/failed.md">@@TOKEN_0@@</a>로 변경되는 동시에 이 속성의 값이 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a>로 바뀝니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">샘플 버퍼 렌더링을 재개하려면 먼저 <a href="avqueuedsamplebufferrendering/flush(">@@TOKEN_0@@</a>.md) 또는 <a href="avsamplebuffervideorenderer/flush(removingdisplayedimage:completionhandler:">@@TOKEN_1@@</a>.md)를 호출해 비디오 렌더러를 리셋해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성은 키-값 관찰이 지원되지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">대신 이 속성의 변경은 <a href="avsamplebuffervideorenderer/requiresflushtoresumedecodingdidchangenotification.md">@@TOKEN_0@@</a> 유형의 알림을 관찰하여 추적합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avsamplebuffervideorenderer/requiresflushtoresumedecodingdidchangenotification.md">class let requiresFlushToResumeDecodingDidChangeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">샘플 버퍼 렌더링을 계속하려면 비디오 렌더러가 플러시가 필요함을 나타내는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avsamplebuffervideorenderer/flush(removingdisplayedimage:completionhandler:">func flush(removingDisplayedImage: Bool, completionHandler: (() -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">비디오 렌더러에 보류 중인 큐 샘플 버퍼를 폐기하라고 지시합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/requiresflushtoresumedecoding">View on Apple Developer</a>*</span>
