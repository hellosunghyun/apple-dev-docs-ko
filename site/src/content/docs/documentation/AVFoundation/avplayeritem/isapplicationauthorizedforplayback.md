---
source_path: "documentation/AVFoundation/avplayeritem/isapplicationauthorizedforplayback.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritem/isapplicationauthorizedforplayback"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isapplicationauthorizedforplayback:0000:0001">isApplicationAuthorizedForPlayback</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isapplicationauthorizedforplayback:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isapplicationauthorizedforplayback:0002:0001">A Boolean value that indicates whether the application can be used to play the content.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isapplicationauthorizedforplayback:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isapplicationauthorizedforplayback:0004:0001">Mac Catalyst 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isapplicationauthorizedforplayback:0004:0002">macOS 10.7+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isApplicationAuthorizedForPlayback: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This property reports whether or not the calling application is authorized to play the content associated with the item.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">하드웨어 비용에 기여하는 요인은 다음과 같습니다:</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">Also, unlike content authorization, application authorization is not dependent on user credentials (that is, if <code>applicationAuthorizedForPlayback</code> is <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>, there are no means to obtain authorization).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">This property is not key-value observable.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayeritem/iscontentauthorizedforplayback.md">var isContentAuthorizedForPlayback: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A Boolean value that indicates whether the content has been authorized by the user.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayeritem/isauthorizationrequiredforplayback.md">var isAuthorizationRequiredForPlayback: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A Boolean value that indicates whether authorization is required to play the content.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplayeritem/requestcontentauthorizationasynchronously(withtimeoutinterval:completionhandler:">func requestContentAuthorizationAsynchronously(withTimeoutInterval: TimeInterval, completionHandler: () -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Presents the user the opportunity to authorize the content for playback.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avplayeritem/contentauthorizationrequeststatus.md">var contentAuthorizationRequestStatus: AVContentAuthorizationStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">The status of the most recent content authorization request.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcontentauthorizationstatus.md">enum AVContentAuthorizationStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">A value representing the status of a content authorization request.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avplayeritem/cancelcontentauthorizationrequest.md">func cancelContentAuthorizationRequest()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Cancels the currently outstanding content authorization request.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritem/isapplicationauthorizedforplayback">View on Apple Developer</a>*</span>
