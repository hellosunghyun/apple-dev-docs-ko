---
source_path: "documentation/AVFoundation/avplayeritem/contentauthorizationrequeststatus.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritem/contentauthorizationrequeststatus"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:contentauthorizationrequeststatus:0000:0001">contentAuthorizationRequestStatus</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contentauthorizationrequeststatus:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contentauthorizationrequeststatus:0002:0001">가장 최근 콘텐츠 권한 부여 요청의 상태입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contentauthorizationrequeststatus:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:contentauthorizationrequeststatus:0004:0001">macOS 10.7+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var contentAuthorizationRequestStatus: AVContentAuthorizationStatus { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The size and position of a rectangle depends on the aspect ratio of the media (16:9 or 4:3), the layer’s <a href="https://developer.apple.com/documentation/QuartzCore/CALayer/bounds">@@TOKEN_0@@</a>, and the value of its <a href="avplayerlayer/videogravity.md">@@TOKEN_1@@</a> property.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 값은 첫 번째 호출 전과 요청 호출이 수행되어 완료 핸들러가 실행되기 직전 사이에 <a href="avcontentauthorizationstatus/unknown.md">@@TOKEN_0@@</a>입니다. 따라서 완료 핸들러에서 이 속성을 조회해도 안전합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 값은 key-value 관찰이 불가능합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayeritem/iscontentauthorizedforplayback.md">var isContentAuthorizedForPlayback: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">콘텐츠가 사용자에 의해 권한이 부여되었는지를 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayeritem/isauthorizationrequiredforplayback.md">var isAuthorizationRequiredForPlayback: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">콘텐츠 재생에 권한이 필요한지를 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplayeritem/isapplicationauthorizedforplayback.md">var isApplicationAuthorizedForPlayback: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">애플리케이션으로 콘텐츠를 재생할 수 있는지를 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avplayeritem/requestcontentauthorizationasynchronously(withtimeoutinterval:completionhandler:">func requestContentAuthorizationAsynchronously(withTimeoutInterval: TimeInterval, completionHandler: () -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">사용자에게 콘텐츠 재생을 위해 권한을 부여할 기회를 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcontentauthorizationstatus.md">enum AVContentAuthorizationStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">콘텐츠 권한 요청 상태를 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avplayeritem/cancelcontentauthorizationrequest.md">func cancelContentAuthorizationRequest()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">현재 대기 중인 콘텐츠 권한 요청을 취소합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritem/contentauthorizationrequeststatus">View on Apple Developer</a>*</span>
