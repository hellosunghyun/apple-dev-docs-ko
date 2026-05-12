---
source_path: "documentation/AVFoundation/avassetresourceloadingrequest/requestor.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/requestor"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:requestor:0000:0001">requestor</span>

<span class="ko-segment" data-segment-id="seg:paragraph:requestor:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:requestor:0002:0001">요청을 만든 에셋 리소스 requestor입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:requestor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:requestor:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:requestor:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:requestor:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:requestor:0004:0004">macOS 10.14+</span>
- <span class="ko-segment" data-segment-id="seg:list:requestor:0004:0005">tvOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:requestor:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var requestor: AVAssetResourceLoadingRequestor { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avassetresourceloadingrequest/request.md">var request: URLRequest</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">리소스에 대한 URL request 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avassetresourceloadingrequest/contentinformationrequest.md">var contentInformationRequest: AVAssetResourceLoadingContentInformationRequest?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">요청된 리소스에 대한 정보입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetresourceloadingrequest/datarequest.md">var dataRequest: AVAssetResourceLoadingDataRequest?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">요청된 리소스 데이터의 범위입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avassetresourceloadingrequest/redirect.md">var redirect: URLRequest?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">로딩 요청이 리디렉션된 경우의 URL request 인스턴스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[func streamingContentKeyRequestData(forApp: Data, contentIdentifier: Data, options: [String : Any]?) throws -&gt; Data](avassetresourceloadingrequest/streamingcontentkeyrequestdata(forapp:contentidentifier:options:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">애플리케이션과 콘텐츠의 특정 조합에 대한 키 요청 데이터를 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[func persistentContentKey(fromKeyVendorResponse: Data, options: [String : Any]?) throws -&gt; Data](avassetresourceloadingrequest/persistentcontentkey(fromkeyvendorresponse:options:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">컨텍스트에서 영구 보존 가능한 콘텐츠 키를 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey.md">let AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">콘텐츠 키 요청이 key vendor로부터 persistable key 반환이 필요한지 지정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/requestor">View on Apple Developer</a>*</span>
