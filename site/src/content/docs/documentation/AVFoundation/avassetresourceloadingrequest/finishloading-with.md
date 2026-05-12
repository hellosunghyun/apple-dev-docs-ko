---
source_path: "documentation/AVFoundation/avassetresourceloadingrequest/finishloading-with.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/finishloading-with"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:finishloadingwith:0000:0001">finishLoading(with:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:finishloadingwith:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:finishloadingwith:0002:0001">리소스 로더의 delegate가 책임을 맡은 리소스에 대한 로드 실패를 수신자가 처리하도록 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:finishloadingwith:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:finishloadingwith:0004:0001">iOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:finishloadingwith:0004:0002">iPadOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:finishloadingwith:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:finishloadingwith:0004:0004">macOS 10.9+</span>
- <span class="ko-segment" data-segment-id="seg:list:finishloadingwith:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:finishloadingwith:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func finishLoading(with error: (any Error)?)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">리소스 로더의 delegate가 리소스 로드 책임을 맡으면, 해당 리소스 로드 중 실패가 발생했을 때 이 메서드를 호출합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 메서드는 로딩 요청을 완료로 표시하고, 해당 리소스를 로드할 수 없음을 리소스 로더 객체에 알립니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>error</code>: 실패 이유를 나타내는 에러 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetresourceloadingrequest/response.md">var response: URLResponse?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">로딩 요청에 대한 URL 응답입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avassetresourceloadingrequest/finishloading.md">func finishLoading()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">수신자가 요청 처리 완료로 처리되도록 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avassetresourceloadingrequest/iscancelled.md">var isCancelled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">요청이 취소되었는지 여부를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avassetresourceloadingrequest/isfinished.md">var isFinished: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">리소스 로드가 완료되었는지 여부를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avassetresourceloadingrequest/finishloading(with:data:redirect:">func finishLoading(with: URLResponse?, data: Data?, redirect: URLRequest?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">리소스 로더의 delegate가 책임을 맡은 리소스의 로드를 수신자가 완료하도록 합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/finishloading(with:">View on Apple Developer</a>)*</span>
