---
source_path: "documentation/AVFoundation/avassetresourceloadingcontentinformationrequest/isentirelengthavailableondemand.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetresourceloadingcontentinformationrequest/isentirelengthavailableondemand"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isentirelengthavailableondemand:0000:0001">isEntireLengthAvailableOnDemand</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isentirelengthavailableondemand:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isentirelengthavailableondemand:0002:0001">에셋 데이터 로딩이 즉시 데이터를 기대할 수 있는지 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isentirelengthavailableondemand:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isentirelengthavailableondemand:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isentirelengthavailableondemand:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isentirelengthavailableondemand:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isentirelengthavailableondemand:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isentirelengthavailableondemand:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isentirelengthavailableondemand:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isEntireLengthAvailableOnDemand: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><a href="avassetresourceloadingrequest.md">@@TOKEN_0@@</a>를 로딩 완료하기 전에, 해당 <a href="avassetresourceloadingrequest/contentinformationrequest.md">@@TOKEN_1@@</a>가 <code>nil</code>이 아니면 모든 에셋 데이터가 사용 가능함을 나타내도록 값을 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_3@@</a>로 설정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이는 데이터가 완전히 캐시되어 있거나, 사용자 지정 URL 스킴이 최종적으로 로컬 저장소의 파일을 참조하기 때문에 큰 데이터 흐름 최적화가 가능하므로 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>일 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">역호환성을 위해 이 속성의 기본값은 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_0@@</a>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001">[var allowedContentTypes: [String]?](avassetwriter/metadata.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">요청한 리소스에 대한 유효한 응답으로 허용되는 데이터 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avassetresourceloadingcontentinformationrequest/contenttype.md">var contentType: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">요청한 리소스가 포함하는 데이터 유형을 지정하는 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avassetresourceloadingcontentinformationrequest/contentlength.md">var contentLength: Int64</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">요청한 리소스의 길이를 바이트 단위로 나타낸 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avassetresourceloadingcontentinformationrequest/isbyterangeaccesssupported.md">var isByteRangeAccessSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">리소스의 임의 바이트 범위에 대한 임의 접근이 지원되는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avassetresourceloadingcontentinformationrequest/renewaldate.md">var renewalDate: Date?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">미디어 시스템이 계속 필요로 할 경우 만료되는 리소스에 대해 새 리소스 로딩 요청이 발급되는 날짜입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetresourceloadingcontentinformationrequest/isentirelengthavailableondemand">View on Apple Developer</a>*</span>
