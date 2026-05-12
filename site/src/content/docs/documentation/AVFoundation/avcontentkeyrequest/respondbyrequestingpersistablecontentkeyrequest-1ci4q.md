---
source_path: "documentation/AVFoundation/avcontentkeyrequest/respondbyrequestingpersistablecontentkeyrequest-1ci4q.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/respondbyrequestingpersistablecontentkeyrequest-1ci4q"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:respondbyrequestingpersistablecontentkeyrequest:0000:0001">respondByRequestingPersistableContentKeyRequest()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:respondbyrequestingpersistablecontentkeyrequest:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:respondbyrequestingpersistablecontentkeyrequest:0002:0001">앱이 처리에 persistable content key request 객체를 사용해야 함을 수신자에게 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:respondbyrequestingpersistablecontentkeyrequest:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:respondbyrequestingpersistablecontentkeyrequest:0004:0001">iOS 10.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:respondbyrequestingpersistablecontentkeyrequest:0004:0002">iPadOS 10.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:respondbyrequestingpersistablecontentkeyrequest:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func respondByRequestingPersistableContentKeyRequest()
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The value of this UTI is <code>com.microsoft.waveform-audio</code>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">Files of this type have a <code>.wav</code>, <code>.wave</code>, or <code>.bwf</code> extension.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">delegate가 <a href="avcontentkeysessiondelegate/contentkeysession(_:didprovide:">@@TOKEN_0@@</a>-2wdgz.md)에 응답하지 않으면 <a href="https://developer.apple.com/documentation/Foundation/NSExceptionName/internalInconsistencyException">@@TOKEN_1@@</a>이(가) 반환됩니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/respondbyrequestingpersistablecontentkeyrequest(">View on Apple Developer</a>-1ci4q)*</span>
