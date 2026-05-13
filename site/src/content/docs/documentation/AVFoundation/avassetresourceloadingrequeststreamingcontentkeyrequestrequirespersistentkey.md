---
source_path: "documentation/AVFoundation/avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey:0000:0001">AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey:0001:0001">**Framework**: AVFoundation **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey:0002:0001">Specifies whether the content key request requires a persistable key to be returned from the key vendor.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey:0004:0004">macOS 10.14+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey:0004:0005">tvOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
let AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey: String
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avassetresourceloadingrequest/request.md">var request: URLRequest</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">세 개의 정점이 연결되어 삼각형을 형성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avassetresourceloadingrequest/requestor.md">var requestor: AVAssetResourceLoadingRequestor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">버퍼의 벡터 개수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetresourceloadingrequest/contentinformationrequest.md">var contentInformationRequest: AVAssetResourceLoadingContentInformationRequest?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">버퍼의 벡터 데이터 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avassetresourceloadingrequest/datarequest.md">var dataRequest: AVAssetResourceLoadingDataRequest?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">버퍼에서 한 벡터의 시작부터 다음 벡터 시작까지의 바이트 길이입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avassetresourceloadingrequest/redirect.md">var redirect: URLRequest?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">작업을 완료하려면 프레임워크에서 더 많은 기능이 필요함을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[func streamingContentKeyRequestData(forApp: Data, contentIdentifier: Data, options: [String : Any]?) throws -&gt; Data](avassetresourceloadingrequest/streamingcontentkeyrequestdata(forapp:contentidentifier:options:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">앱이 네트워크로 수신한 협업 데이터를 프레임워크가 구문 분석하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[func persistentContentKey(fromKeyVendorResponse: Data, options: [String : Any]?) throws -&gt; Data](avassetresourceloadingrequest/persistentcontentkey(fromkeyvendorresponse:options:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Obtains a persistable content key from a context.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey">View on Apple Developer</a>*</span>
