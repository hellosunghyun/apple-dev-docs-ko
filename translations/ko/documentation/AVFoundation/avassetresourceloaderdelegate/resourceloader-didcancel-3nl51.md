---
source_path: "documentation/AVFoundation/avassetresourceloaderdelegate/resourceloader-didcancel-3nl51.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetresourceloaderdelegate/resourceloader-didcancel-3nl51"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:resourceloaderdidcancel:0000:0001">resourceLoader(_:didCancel:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:resourceloaderdidcancel:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:resourceloaderdidcancel:0002:0001">대리자에게 이전 로드 요청이 취소되었음을 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:resourceloaderdidcancel:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:resourceloaderdidcancel:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:resourceloaderdidcancel:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:resourceloaderdidcancel:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:resourceloaderdidcancel:0004:0004">macOS 10.9+</span>
- <span class="ko-segment" data-segment-id="seg:list:resourceloaderdidcancel:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:resourceloaderdidcancel:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func resourceLoader(_ resourceLoader: AVAssetResourceLoader, didCancel loadingRequest: AVAssetResourceLoadingRequest)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">리소스의 데이터가 더 이상 필요하지 않거나, 동일한 리소스의 새 데이터 요청으로 인해 이전 로드 요청이 대체되는 경우 이전에 발급된 로드 요청이 취소될 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">The example below shows how to reverse synchronize the output timestamps to the original timestamps in the <a href="avcapturevideodataoutputsamplebufferdelegate/captureoutput(_:didoutput:from:">@@TOKEN_0@@</a>.md) method:</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>resourceLoader</code>: 리소스 로더입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>loadingRequest</code>: 취소된 로드 요청입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avassetresourceloaderdelegate/resourceloader(_:shouldwaitforloadingofrequestedresource:">func resourceLoader(AVAssetResourceLoader, shouldWaitForLoadingOfRequestedResource: AVAssetResourceLoadingRequest) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">대리자가 요청한 리소스를 로드할지 여부를 묻습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avassetresourceloaderdelegate/resourceloader(_:shouldwaitforrenewalofrequestedresource:">func resourceLoader(AVAssetResourceLoader, shouldWaitForRenewalOfRequestedResource: AVAssetResourceRenewalRequest) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">애플리케이션이 리소스를 갱신하기 위해 도움을 요청할 때 대리자에게 알립니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetresourceloaderdelegate/resourceloader(_:didcancel:">Apple Developer에서 보기</a>-3nl51)*</span>
