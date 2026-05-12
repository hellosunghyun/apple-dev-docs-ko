---
source_path: "documentation/AVFoundation/avplayeritemerrorlogevent/serveraddress.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritemerrorlogevent/serveraddress"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:serveraddress:0000:0001">serverAddress</span>

<span class="ko-segment" data-segment-id="seg:paragraph:serveraddress:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:serveraddress:0002:0001">오류의 소스인 서버의 IP 주소입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:serveraddress:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:serveraddress:0004:0001">iOS 4.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:serveraddress:0004:0002">iPadOS 4.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:serveraddress:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:serveraddress:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:serveraddress:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:serveraddress:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:serveraddress:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var serverAddress: String? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 “s-ip”에 해당합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성의 값은 IPv4 또는 IPv6 주소일 수 있으며, 주소가 알려지지 않으면 <code>nil</code>일 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avplayeritemerrorlogevent/date.md">var date: Date?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">오류가 발생한 날짜와 시간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avplayeritemerrorlogevent/uri.md">var uri: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">오류가 발생한 재생 항목의 URI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avplayeritemerrorlogevent/playbacksessionid.md">var playbackSessionID: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">오류가 발생한 재생 세션을 식별하는 GUID입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avplayeritemerrorlogevent/errorstatuscode.md">var errorStatusCode: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">고유한 오류 코드 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avplayeritemerrorlogevent/errordomain.md">var errorDomain: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">오류의 도메인입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avplayeritemerrorlogevent/errorcomment.md">var errorComment: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">발생한 오류에 대한 설명입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001">[var allHTTPResponseHeaderFields: [String : String]?](avplayeritemerrorlogevent/allhttpresponseheaderfields.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">서버가 반환한 HTTP 헤더 필드입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritemerrorlogevent/serveraddress">View on Apple Developer</a>*</span>
