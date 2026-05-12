---
source_path: "documentation/AVFoundation/avplayeritem/cancelcontentauthorizationrequest.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritem/cancelcontentauthorizationrequest"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cancelcontentauthorizationrequest:0000:0001">cancelContentAuthorizationRequest()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cancelcontentauthorizationrequest:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cancelcontentauthorizationrequest:0002:0001">현재 보류 중인 콘텐츠 권한 부여 요청을 취소합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cancelcontentauthorizationrequest:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cancelcontentauthorizationrequest:0004:0001">macOS 10.7+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cancelContentAuthorizationRequest()
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 메서드를 호출하면 콘텐츠 권한 부여 요청이 대기 중일 때 해당 요청이 취소되고 완료 핸들러가 <a href="avcontentauthorizationstatus/cancelled.md">@@TOKEN_0@@</a> 상태로 호출됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001"><code>AVSampleBufferDisplayLayer</code> keeps track of the occupancy levels of its internal queues for the benefit of clients that enqueue sample buffers from non-real-time sources — that is, clients that can supply sample buffers faster than they are consumed and need to decide when to hold back buffers.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avplayeritem/iscontentauthorizedforplayback.md">var isContentAuthorizedForPlayback: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">콘텐츠가 사용자에 의해 권한 부여되었는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avplayeritem/isauthorizationrequiredforplayback.md">var isAuthorizationRequiredForPlayback: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">콘텐츠 재생에 권한 부여가 필요한지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avplayeritem/isapplicationauthorizedforplayback.md">var isApplicationAuthorizedForPlayback: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">애플리케이션으로 콘텐츠를 재생할 수 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avplayeritem/requestcontentauthorizationasynchronously(withtimeoutinterval:completionhandler:">func requestContentAuthorizationAsynchronously(withTimeoutInterval: TimeInterval, completionHandler: () -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">사용자가 콘텐츠 재생을 위해 권한을 부여할 수 있는 기회를 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avplayeritem/contentauthorizationrequeststatus.md">var contentAuthorizationRequestStatus: AVContentAuthorizationStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">가장 최근 콘텐츠 권한 부여 요청의 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcontentauthorizationstatus.md">enum AVContentAuthorizationStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">콘텐츠 권한 부여 요청의 상태를 나타내는 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritem/cancelcontentauthorizationrequest(">View on Apple Developer</a>)*</span>
