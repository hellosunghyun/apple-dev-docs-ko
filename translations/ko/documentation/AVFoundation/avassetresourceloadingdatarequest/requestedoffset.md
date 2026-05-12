---
source_path: "documentation/AVFoundation/avassetresourceloadingdatarequest/requestedoffset.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetresourceloadingdatarequest/requestedoffset"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:requestedoffset:0000:0001">requestedOffset</span>

<span class="ko-segment" data-segment-id="seg:paragraph:requestedoffset:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:requestedoffset:0002:0001">요청한 첫 번째 바이트가 리소스 내에서 위치한 위치입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:requestedoffset:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:requestedoffset:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:requestedoffset:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:requestedoffset:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:requestedoffset:0004:0004">macOS 10.9+</span>
- <span class="ko-segment" data-segment-id="seg:list:requestedoffset:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:requestedoffset:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var requestedOffset: Int64 { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">요청할 수 있는 바이트를 모두 로드하면(수신된 <a href="avassetresourceloadingrequest.md">@@TOKEN_0@@</a> 인스턴스에 포함된 가능한 <a href="avassetresourceloadingrequest/contentinformationrequest.md">@@TOKEN_1@@</a> 데이터를 포함), 델리게이트는 <a href="avassetresourceloadingrequest/finishloading(">@@TOKEN_2@@</a>.md)을 호출하여 응답해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001"><code>requestedOffset</code> 값이 리소스의 콘텐츠 길이보다 크면, <a href="avassetresourceloadingdatarequest/respond(with:">@@TOKEN_1@@</a>.md)가 먼저 호출되지 않은 상태에서 <a href="avassetresourceloadingrequest.md">@@TOKEN_2@@</a> 인스턴스에 <a href="avassetresourceloadingrequest/finishloading(">@@TOKEN_3@@</a>.md) 메시지가 전송됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avassetresourceloadingdatarequest/respond(with:">func respond(with: Data)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">로딩 요청에 데이터를 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avassetresourceloadingdatarequest/requestedlength.md">var requestedLength: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">요청한 데이터의 길이(바이트)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avassetresourceloadingdatarequest/currentoffset.md">var currentOffset: Int64</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">리소스 내에서 다음 바이트의 위치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avassetresourceloadingdatarequest/requestsalldatatoendofresource.md">var requestsAllDataToEndOfResource: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">리소스의 오프셋부터 끝까지 남은 전체 길이가 요청 중임을 나타내는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetresourceloadingdatarequest/requestedoffset">View on Apple Developer</a>*</span>
