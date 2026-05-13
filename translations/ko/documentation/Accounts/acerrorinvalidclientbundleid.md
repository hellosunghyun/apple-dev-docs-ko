---
source_path: "documentation/Accounts/acerrorinvalidclientbundleid.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accounts/acerrorinvalidclientbundleid"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:acerrorinvalidclientbundleid:0000:0001">ACErrorInvalidClientBundleID</span>

<span class="ko-segment" data-segment-id="seg:paragraph:acerrorinvalidclientbundleid:0001:0001">**Framework**: Accounts **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:acerrorinvalidclientbundleid:0002:0001">Error code that indicates the client making the request doesn’t have a valid bundle ID.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:acerrorinvalidclientbundleid:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:acerrorinvalidclientbundleid:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:acerrorinvalidclientbundleid:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:acerrorinvalidclientbundleid:0004:0003">Mac Catalyst 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:acerrorinvalidclientbundleid:0004:0004">macOS 10.8+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var ACErrorInvalidClientBundleID: ACErrorCode { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="acerrorunknown.md">var ACErrorUnknown: ACErrorCode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">*<a href="https://developer.apple.com/documentation/accelerate/dggsvp3_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">Apple Developer에서 보기</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="acerroraccountmissingrequiredproperty.md">var ACErrorAccountMissingRequiredProperty: ACErrorCode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Error code that indicates an account wasn’t saved because a required property is missing.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="acerroraccountauthenticationfailed.md">var ACErrorAccountAuthenticationFailed: ACErrorCode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Error code that indicates an account wasn’t saved because authentication of its credential failed.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="acerroraccounttypeinvalid.md">var ACErrorAccountTypeInvalid: ACErrorCode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Error code that indicates an account wasn’t saved because its account type is invalid.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="acerroraccountalreadyexists.md">var ACErrorAccountAlreadyExists: ACErrorCode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Error code that indicates an account wasn’t added because it already exists.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="acerroraccountnotfound.md">var ACErrorAccountNotFound: ACErrorCode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Error code that indicates an account wasn’t deleted because it couldn’t be found.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="acerrorpermissiondenied.md">var ACErrorPermissionDenied: ACErrorCode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Error code that indicates the operation failed because the application doesn’t have permission to perform the operation.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="acerroraccessinfoinvalid.md">var ACErrorAccessInfoInvalid: ACErrorCode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Error code that indicates the client’s access info dictionary has incorrect or missing values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="acerrorclientpermissiondenied.md">var ACErrorClientPermissionDenied: ACErrorCode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Error code that indicates the client doesn’t have access to the requested data.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="acerroraccessdeniedbyprotectionpolicy.md">var ACErrorAccessDeniedByProtectionPolicy: ACErrorCode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Error code that indicates due to the current protection policy, the credentials couldn’t be fetched.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="acerrorcredentialnotfound.md">var ACErrorCredentialNotFound: ACErrorCode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Error code that indicates no credentials were found.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="acerrorfetchcredentialfailed.md">var ACErrorFetchCredentialFailed: ACErrorCode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Error code that indicates the credentials couldn’t be fetched from Keychain.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="acerrorstorecredentialfailed.md">var ACErrorStoreCredentialFailed: ACErrorCode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Error code that indicates the credentials couldn’t be stored in Keychain.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="acerrorremovecredentialfailed.md">var ACErrorRemoveCredentialFailed: ACErrorCode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Error code that indicates the credentials couldn’t be removed from Keychain.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="acerrorupdatingnonexistentaccount.md">var ACErrorUpdatingNonexistentAccount: ACErrorCode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Error code that indicates an account save failed because the account being updated has been removed.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accounts/acerrorinvalidclientbundleid">View on Apple Developer</a>*</span>
