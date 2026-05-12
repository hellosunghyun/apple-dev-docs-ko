---
source_path: "documentation/AVFoundation/avcontentkeysession/makesecuretokenforexpirationdate-ofpersistablecontentkeycompletionhandler.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcontentkeysession/makesecuretokenforexpirationdate-ofpersistablecontentkeycompletionhandler"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:makesecuretokenforexpirationdateofpersistablecontentkeycompletionhandler:0000:0001">makeSecureTokenForExpirationDate(ofPersistableContentKey:completionHandler:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:makesecuretokenforexpirationdateofpersistablecontentkeycompletionhandler:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:makesecuretokenforexpirationdateofpersistablecontentkeycompletionhandler:0002:0001">주어진 persistable 콘텐츠 키 데이터의 만료일을 얻기 위해 클라이언트가 키 서버에 전송하는 보안 서버 재생 컨텍스트를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:makesecuretokenforexpirationdateofpersistablecontentkeycompletionhandler:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:makesecuretokenforexpirationdateofpersistablecontentkeycompletionhandler:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:makesecuretokenforexpirationdateofpersistablecontentkeycompletionhandler:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:makesecuretokenforexpirationdateofpersistablecontentkeycompletionhandler:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:makesecuretokenforexpirationdateofpersistablecontentkeycompletionhandler:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:makesecuretokenforexpirationdateofpersistablecontentkeycompletionhandler:0004:0005">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:makesecuretokenforexpirationdateofpersistablecontentkeycompletionhandler:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:makesecuretokenforexpirationdateofpersistablecontentkeycompletionhandler:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func makeSecureTokenForExpirationDate(ofPersistableContentKey persistableContentKeyData: Data) async throws -> Data
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>persistableContentKeyData</code>: 이전에 생성된 persistable 콘텐츠 키 데이터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>handler</code>: 보안 토큰이 준비된 후 호출되는 블록입니다. - **secureTokenData**: 새 보안 토큰입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003">**error**: 오류를 설명하는 오류 객체를 보유하는 파라미터입니다. 오류가 발생하지 않으면 이 파라미터의 값은 <code>nil</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcontentkeysession/expire.md">func expire()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">세션이 정상적인 의도된 처리 결과로 만료되었음을 델리게이트에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcontentkeysession/renewexpiringresponsedata(for:">func renewExpiringResponseData(for: AVContentKeyRequest)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">콘텐츠 키 요청에 대해 이전에 제공된 응답 데이터가 곧 만료됨을 델리게이트에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcontentkeysession/contentprotectionsessionidentifier.md">var contentProtectionSessionIdentifier: Data?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">현재 콘텐츠 보호 세션의 식별자입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcontentkeysession/makesecuretokenforexpirationdate(ofpersistablecontentkey:completionhandler:">View on Apple Developer</a>)*</span>
