---
source_path: "documentation/AVFoundation/avsamplebuffervideorenderer/requiresflushtoresumedecodingdidchangenotification.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/requiresflushtoresumedecodingdidchangenotification"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:requiresflushtoresumedecodingdidchangenotification:0000:0001">requiresFlushToResumeDecodingDidChangeNotification</span>

<span class="ko-segment" data-segment-id="seg:paragraph:requiresflushtoresumedecodingdidchangenotification:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:requiresflushtoresumedecodingdidchangenotification:0002:0001">샘플 버퍼 렌더링을 계속 진행하려면 비디오 렌더러가 플러시가 필요함을 나타내는 알림입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:requiresflushtoresumedecodingdidchangenotification:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:requiresflushtoresumedecodingdidchangenotification:0004:0001">iOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:requiresflushtoresumedecodingdidchangenotification:0004:0002">iPadOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:requiresflushtoresumedecodingdidchangenotification:0004:0003">Mac Catalyst 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:requiresflushtoresumedecodingdidchangenotification:0004:0004">macOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:requiresflushtoresumedecodingdidchangenotification:0004:0005">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:requiresflushtoresumedecodingdidchangenotification:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class let requiresFlushToResumeDecodingDidChangeNotification: NSNotification.Name
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avsamplebuffervideorenderer/requiresflushtoresumedecoding.md">var requiresFlushToResumeDecoding: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001"><code>Boolean</code> 값으로, 렌더러가 프레임 디코딩을 계속하려면 플러시가 필요한지 여부를 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avsamplebuffervideorenderer/flush(removingdisplayedimage:completionhandler:">func flush(removingDisplayedImage: Bool, completionHandler: (() -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">비디오 렌더러에 대기 중인 큐(샘플 버퍼)를 폐기하라고 지시합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/requiresflushtoresumedecodingdidchangenotification">View on Apple Developer</a>*</span>
