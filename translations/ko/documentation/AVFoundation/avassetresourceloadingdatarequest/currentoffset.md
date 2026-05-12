---
source_path: "documentation/AVFoundation/avassetresourceloadingdatarequest/currentoffset.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetresourceloadingdatarequest/currentoffset"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:currentoffset:0000:0001">currentOffset</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentoffset:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentoffset:0002:0001">리소스 내 다음 바이트의 위치입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentoffset:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:currentoffset:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentoffset:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentoffset:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentoffset:0004:0004">macOS 10.9+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentoffset:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentoffset:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var currentOffset: Int64 { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">데이터를 증분 로딩할 때는 이 오프셋에서 로딩을 시작하고 <a href="avassetresourceloadingdatarequest/respond(with:">@@TOKEN_0@@</a>.md) 메서드를 호출하여 데이터를 반환해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 값 이전의 바이트는 이미 제공되었습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avassetresourceloadingdatarequest/respond(with:">func respond(with: Data)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">로딩 요청에 데이터를 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetresourceloadingdatarequest/requestedlength.md">var requestedLength: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">요청한 데이터의 길이(바이트)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avassetresourceloadingdatarequest/requestedoffset.md">var requestedOffset: Int64</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">요청한 첫 번째 바이트의 리소스 내 위치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avassetresourceloadingdatarequest/requestsalldatatoendofresource.md">var requestsAllDataToEndOfResource: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">리소스의 오프셋부터 끝까지 남은 전체 길이를 요청하고 있는지를 나타내는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetresourceloadingdatarequest/currentoffset">View on Apple Developer</a>*</span>
