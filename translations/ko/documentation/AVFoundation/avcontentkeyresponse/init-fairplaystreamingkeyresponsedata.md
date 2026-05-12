---
source_path: "documentation/AVFoundation/avcontentkeyresponse/init-fairplaystreamingkeyresponsedata.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcontentkeyresponse/init-fairplaystreamingkeyresponsedata"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initfairplaystreamingkeyresponsedata:0000:0001">init(fairPlayStreamingKeyResponseData:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initfairplaystreamingkeyresponsedata:0001:0001">**Framework**: AVFoundation **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initfairplaystreamingkeyresponsedata:0002:0001">FairPlay Streaming이 키 전달 방식으로 사용될 때, 암호화된 키 응답 데이터 블롭으로 콘텐츠 키 응답을 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initfairplaystreamingkeyresponsedata:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initfairplaystreamingkeyresponsedata:0004:0001">iOS 10.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfairplaystreamingkeyresponsedata:0004:0002">iPadOS 10.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfairplaystreamingkeyresponsedata:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfairplaystreamingkeyresponsedata:0004:0004">macOS 10.12.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfairplaystreamingkeyresponsedata:0004:0005">tvOS 10.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfairplaystreamingkeyresponsedata:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfairplaystreamingkeyresponsedata:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
convenience init(fairPlayStreamingKeyResponseData keyResponseData: Data)
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">콘텐츠를 복호화할 새 <a href="avcontentkeyresponse.md">@@TOKEN_0@@</a> 객체를 반환합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 이니셜라이저의 결과는 콘텐츠 키 세션이 <a href="avcontentkeysystem/fairplaystreaming.md">@@TOKEN_0@@</a> 매개변수를 사용해 키 요청을 생성할 때 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">그 결과는 <a href="avcontentkeyrequest/processcontentkeyresponse(_:">@@TOKEN_0@@</a>.md) 메서드에 전달되어 복호화기에 키 데이터를 제공합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>keyResponseData</code>: FairPlay Streaming 키 서버에서 제공하는 키 데이터입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmetadataidentifier/id3metadataaudioencryption.md">convenience init(clearKeyData: Data, initializationVector: Data?)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">평문으로 전송된 키 데이터와 초기화 벡터용 새 키 응답 객체를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmetadataidentifier/id3metadataaudioseekpointindex.md">convenience init(authorizationTokenData: Data)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">권한 부여 토큰이 포함된 콘텐츠 키 응답을 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcontentkeyresponse/init(fairplaystreamingkeyresponsedata:">View on Apple Developer</a>)*</span>
